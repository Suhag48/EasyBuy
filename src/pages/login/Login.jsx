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
import img from "../../images/img5.jpg";

const LoginForm = () => {
  return (
    <div className="container mx-auto py-16 md:py-24 px-4 sm:px-0">
      <div className="flex md:gap-4 lg:gap-8 justify-center">
        <img src={img} alt="" className="w-1/2 hidden md:flex" />
        <Card className="">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription className="mt-2">
              Sign in to enjoy shopping
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <FormInput type="email" name="email" placeholder="your email" />
            <FormInput type="password" name="password" placeholder="password" />
          </CardContent>
          <CardFooter className="flex flex-col justify-center">
            <Button className="w-full">Sign In</Button>
            <div className="flex justify-center gap-1 mt-4">
              <p>{`Don't have an account?`}</p>
              <Link to="/register">Create account</Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
