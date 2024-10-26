import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";

const RegisterForm = () => {
  return (
    <div className="flex justify-center container mx-auto py-16 px-4 sm:px-0">
      <Card className="bg-neutral-200 w-full sm:w-3/4 md:w-1/2 lg:w-2/5">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create New Account</CardTitle>
          <CardDescription className="mt-2">
            create an account to join us
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <FormInput type="text" name="name" placeholder="your name" />
          <FormInput type="email" name="email" placeholder="your email" />
          <FormInput type="password" name="password" placeholder="password" />
          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
          />
        </CardContent>
        <CardFooter className="flex flex-col justify-center">
          <Button className="w-full">Create</Button>
          <div className="flex justify-center gap-1 mt-4">
            <p>Already have an account?</p>
            <Link to="/login">Sign In</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
