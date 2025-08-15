import Image from "next/image"; 
import {Button} from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
export default function Home() {
  return (
    <div>
      <h1>Welcome to Vaanify</h1>
      <Button>Click Me</Button>
      <UserButton />
    </div>
  );
}
