import FileUploader from "@/components/file-uploader";

export default function UploadPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Upload Files to Firebase</h1>
      <FileUploader />
    </div>
  );
}
