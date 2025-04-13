import { Button } from "~/components/ui/button";
import { FaGoogle, FaDiscord, FaGithub } from "react-icons/fa6";

export function Social() {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button size="lg" className="w-full" variant="outline">
        <FaGoogle className="h5 w-5" />
      </Button>
      <Button size="lg" className="w-full" variant="outline">
        <FaGithub className="h5 w-5" />
      </Button>
      <Button size="lg" className="w-full" variant="outline">
        <FaDiscord className="h5 w-5" />
      </Button>
    </div>
  );
}
