import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCamera, faSearch } from "@fortawesome/free-solid-svg-icons";

const AddMeal = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mealType = searchParams.get("type") || "meal";
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (files: FileList | null) => {
    if (files && files[0]) {
      // TODO: Send to n8n webhook for analysis
      console.log("Uploading file:", files[0]);
      // For now, navigate to results page
      navigate("/dashboard/meal-result");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border px-6 py-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-foreground hover:text-accent transition-colors"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="mb-3 text-center text-4xl font-bold capitalize">
          Add Your {mealType}
        </h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Take a photo or upload an image of your food
        </p>

        <Card
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`mb-8 border-2 border-dashed p-12 text-center transition-all ${
            isDragging
              ? "border-accent bg-accent/5"
              : "border-border hover:border-accent/50"
          }`}
        >
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="mb-4 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">
                <FontAwesomeIcon icon={faCamera} className="h-12 w-12 text-accent" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Take a photo or upload</h3>
            <p className="text-muted-foreground">Drag and drop or click to select</p>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => handleFileUpload(e.target.files)}
            />
          </label>
        </Card>

        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground">OR</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button
          variant="outline"
          className="h-14 w-full rounded-xl text-lg font-semibold"
          onClick={() => {
            // TODO: Navigate to manual search page
            console.log("Manual search");
          }}
        >
          <FontAwesomeIcon icon={faSearch} className="mr-2 h-5 w-5" />
          Search food manually
        </Button>
      </div>
    </div>
  );
};

export default AddMeal;
