import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, push,set } from "firebase/database";
import { realtimedatabase} from "../firebase/firebase";
import { onValue } from "firebase/database";


const initialState = {
  emails: [],
  currentEmail: null,
  loading: false,
  error: null,
  count: 0,
};

export const fetchemail = createAsyncThunk(
  "email/fetchemail",
  async (_, { }) => {
  
    
      const emailsRef = ref(realtimedatabase, 'myData');
     
        return new Promise((resolve, reject) => {
          onValue(
            emailsRef,
            (snapshot) => {
              const emailsData = snapshot.val();
              const emails = emailsData
                ? Object.keys(emailsData).map((key) => ({
                    id: key,
                    ...emailsData[key],
                  }))
                : [];
                
              resolve(emails);
            },
            (error) => {
              reject(error);
            }
          );
        });
       
    
    return [];
  }
);

export const saveDataToFirebase = createAsyncThunk(
    'data/save',
    async (data, thunkAPI) => {
      try {
        const dbRef = ref(realtimedatabase, 'myData');
        const newRef = push(dbRef);
        await set(newRef, data); 
        return { id: newRef.key, ...data }; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

// export const addemails = createAsyncThunk(
//   'email/addemails', 
//   async (emailData, { getState, rejectWithValue }) => { 
//     const user = getState().auth.user;
//     if (!user?.uid) {
//       return rejectWithValue('User not authenticated');
//     }
//     try {
//       const emailRef = ref(realtimedatabase, `emails/${user.uid}/emails`);
//       const newEmailRef = await push(emailRef, {
//         ...emailData,
//         timestamp: Date.now(),
//         read: false, 
//       });
//       const newEmail = {
//         id: newEmailRef.key,
//         ...emailData,
//         timestamp: Date.now(),
//         read: false,
//       };
//       return newEmail; 
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    sendEmail: (state, action) => {
      const newEmail = {
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        read: false,
      };
      state.emails.unshift(newEmail);
      state.count += 1; 
    },
    setCurrentEmail: (state, action) => {
      state.currentEmail = action.payload;
    },
    deleteEmail: (state, action) => {
      const deletedEmailIndex = state.emails.findIndex((email) => email.id === action.payload);
      if (deletedEmailIndex !== -1) {
        state.emails.splice(deletedEmailIndex, 1); 
        state.count -= 1;
      }

      if (state.currentEmail?.id === action.payload) {
        state.currentEmail = null;
      }
    },
    markAsRead: (state, action) => {
      state.emails = state.emails.map((email) =>
        email.id === action.payload ? { ...email, read: true } : email
      );
      if (state.currentEmail?.id === action.payload) {
        state.currentEmail = { ...state.currentEmail, read: true };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchemail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchemail.fulfilled, (state, action) => {
        state.loading = false;
        state.emails = action.payload;
        state.count = action.payload.length; 
      })
      .addCase(fetchemail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(saveDataToFirebase.pending,(state)=>{
        state.loading=true;
        state.error=null;
       
      })
      .addCase(saveDataToFirebase.fulfilled, (state, action) => {
        state.emails.unshift(action.payload); 
        state.count += 1; 
        state.loading=false
      })
      .addCase(saveDataToFirebase.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      })
  },
});

export const { sendEmail, setCurrentEmail, deleteEmail, markAsRead } = emailSlice.actions;


