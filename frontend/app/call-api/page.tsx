'use client';

import axios from 'axios';

export default function Page(){
    const config = {
      headers: { "User-Agent": "application/json" },
    };
    const doPost = async () => {
        const payload = {
            id: 100,
            name: 'send something',
        }
    await axios
      .post("http://localhost:3000/test", payload, config)
      .then((r) => {})
      .catch((err) => {});
    }

    const doGet = async () => {
        await axios
          .get("http://localhost:3000/test", config)
          .then((r) => {})
          .catch((err) => {});
    }

    const doPut = async () => {
        await axios
          .put("http://localhost:3000/test/100", config)
          .then((r) => {})
          .catch((err) => {});
    }

    const doDelete = async () => {
        await axios
          .delete("http://localhost:3000/test/100", config)
          .then((r) => {})
          .catch((err) => {});
    }

    return (
      <>
        <button onClick={doGet} className="btn btn-primary">
          get
        </button>
        <button onClick={doPost} className="btn btn-primary">
          post
        </button>
        <button onClick={doPut} className="btn btn-primary">
          update
        </button>
        <button onClick={doDelete} className="btn btn-primary">
          delete
        </button>
      </>
    );
}