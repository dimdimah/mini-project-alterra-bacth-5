import { AiFillLike, AiFillEye } from "react-icons/Ai";

export default function Modal({
  imgUrl,
  alt,
  title,
  description,
  titleProduct,
  descriptionProduct,
  like,
  rate,
}) {
  return (
    <div className="w-60">
      <button
        className="bg-[#565564] rounded-lg"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <img src={imgUrl} alt={alt} width={250} height={300} />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="w-11/12 max-w-5xl modal-box bg-slate-600">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex justify-between w-full text-sm">
        <div>
          <p>{titleProduct}</p>
          <h1>{descriptionProduct}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <AiFillLike />
          <p>{like}</p>
          <AiFillEye />
          <p>{rate}</p>
        </div>
      </div>
    </div>
  );
}
