export default function UploadButton({ onUpload }) {
  return (
    <button
      onClick={onUpload}
      className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
    >
      Upload PDF
    </button>
  );
}
