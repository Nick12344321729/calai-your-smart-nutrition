import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold">Cal AI</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Login functionality will be implemented with Clerk
        </p>
        <Button onClick={() => navigate("/")} className="h-14 w-full rounded-xl text-lg font-semibold">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Login;
