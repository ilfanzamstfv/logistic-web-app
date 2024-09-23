import Scanner from "@/components/scanner/Scanner";

const Scanpage = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="text-xl font-bold text-black">
        <h1>QR Code Scanner</h1>
        <div className="mt-10">
          <Scanner />
        </div>
      </div>
    </div>
  );
};

export default Scanpage;
