import Layout from "@/components/layout";
import Card from "@/components/modal";

function App() {
  return (
    <Layout>
      <button
        className="bg-[#565564] rounded-lg"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <img
          src="https://react-tailwind-portfolio-virid.vercel.app/Frame2.png"
          alt="img-products"
          width={250}
          height={300}
        />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="w-11/12 max-w-5xl modal-box bg-slate-600">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </Layout>
  );
}

export default App;
