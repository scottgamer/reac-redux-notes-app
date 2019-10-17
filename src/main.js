import store from './store/store';
import { addNote, removeNote } from './actions/actions';

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------ Redux ------
function deleteNote(index) {
  store.dispatch(removeNote(index));
}

function renderNotes() {
  let notes = store.getState().notes;

  console.log('state', store.getState());

  notesUList.innerHTML = '';
  notes.map((note, index) => {
    let noteItem = `
      <li>
        <b>${note.title}</b>
        <button data-id="${index}">x</button>
        <br />
        <span>${note.content}</span>
      </li>
    `;
    notesUList.innerHTML += noteItem;
  });
  setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', e => {
  e.preventDefault();

  // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
  let title = addNoteTitle.value;
  let content = addNoteContent.value;
  store.dispatch(addNote(title, content));
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button');

  for (let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id);
    });
  }
}

// ------ Render the initial Notes ------
const unsubscribe = store.subscribe(() => {
  renderNotes();
});

// if want to unsubscribe
// unsubscribe();
