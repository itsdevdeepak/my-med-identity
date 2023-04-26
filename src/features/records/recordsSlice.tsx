import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RecordType } from '../../components/record';

const tempRecords: RecordType[] = [
  {
    id: '1',
    name: 'Record Title 1',
    tagName: '1-2-2023',
    allergies: ['allergie 1', 'allergie 2', 'allergie 3'],
    discription:
      'really long descrtion too big to handel  alone cant do any thingg booo yaaa',
  },
  {
    id: '2',
    name: 'Record Title 2',
    tagName: '1-2-2023',
    allergies: [
      'allergie 1',
      'allergie 2',
      'allergie 3',
      'allergie 3',
      'allergie 3',
      'allergie 3',
    ],
    discription: 'small  description so short mehhh!!!',
  },
  {
    id: '3',
    name: 'Record Title 3',
    tagName: '1-2-2023',
    allergies: ['allergie 1'],
  },
  {
    id: '4',
    name: 'Record Title 4',
    tagName: '1-2-2023',
    allergies: ['allergie 1', 'allergie 2', 'allergie 3'],
    discription:
      'really long descrtion too big to handel  alone cant do any thingg booo yaaa',
  },
];

type RecordsState = {
  entities: RecordType[];
};

const initialState: RecordsState = {
  entities: tempRecords,
};

const recordsSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<RecordType>) => {
      state.entities.push(action.payload);
    },
    removeRecord: (state, action: PayloadAction<RecordType['id']>) => {
      state.entities = state.entities.filter(
        (record) => record.id !== action.payload
      );
    },
    updateRecord: (
      state,
      action: PayloadAction<{
        id: RecordType['id'];
        record: Omit<Partial<RecordType>, 'id'>;
      }>
    ) => {
      const recordIndex = state.entities.findIndex(
        (record) => record.id === action.payload.id
      );
      state.entities[recordIndex] = {
        ...state.entities[recordIndex],
        ...action.payload.record,
      };
    },
  },
});

export const { addRecord, removeRecord, updateRecord } = recordsSlice.actions;

export default recordsSlice.reducer;
