import Modal from "../components/MyModel";
export default function Page() {
  return (
    <>
      <div className="p-5">
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modalExample"
        >
          Click for open modal
        </button>
        <Modal id="modalExample" title="this is title">
          <p>This is Content</p>
        </Modal>
      </div>
    </>
  );
}
