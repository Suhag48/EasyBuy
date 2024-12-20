import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FormInput from "../../components/FormInput";

const Contact = () => {
  return (
    <div className="flex justify-center container mx-auto py-16 px-4 sm:px-0">
      <Card className="bg-neutral-200 w-full sm:w-3/4 md:w-1/2 lg:w-2/5">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Contact Us</CardTitle>
          <CardDescription className="mt-2">
            feel free to share your opinion
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <FormInput type="text" name="name" placeholder="your name" />
          <FormInput type="email" name="email" placeholder="your email" />
          <Textarea
            rows="7"
            placeholder="type your message."
            className="focus-visible:ring-transparent"
          />
        </CardContent>
        <CardFooter className="flex flex-col justify-center">
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Contact;
