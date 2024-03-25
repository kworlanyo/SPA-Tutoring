import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Display() {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div className="display-container">
      <div className="quotes-container">
        <h3>
          Hey👋, here are some quotes to motivate you as you create your notes.
          Enjoy👍
        </h3>
        {/* If state.isLoading is true, we should see the loading text. This is useful because we don't know how long it will take for the data to arrive from the api. */}
        {state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="quotes">
            <h2>{state.quote.text}</h2>
            <p>--{state.quote.author}</p>
          </div>
        )}
      </div>
      <>
        {/* If there are no notes in the display array, we will the user that there are no notes. Else we will render the notes that are in the array */}
        {state.display.length < 1 ? (
          <h2 className="no-notes">No notes created</h2>
        ) : (
          <div className="notes-bigger-container">
            <button onClick={() => dispatch({ type: "DELETE-ALL" })}>
              Clear All
            </button>
            <div className="notes-container">
              {state.display.map((noteObj) => {
                return (
                  <div className="note" key={noteObj.id}>
                    <h1>{noteObj.title}</h1>
                    <p>{noteObj.notes}</p>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE", payload: noteObj.id })
                      }
                    >
                      DELETE
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Display;
