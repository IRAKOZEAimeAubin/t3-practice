import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Header } from "~/components/auth/header";
import { Social } from "~/components/auth/social";
import { BackButton } from "~/components/auth/back-button";

interface CardWrapperProps {
  children?: React.ReactNode;
  headerLabel: string;
  headerMessage: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export function CardWrapper({
  children,
  headerLabel,
  headerMessage,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card>
      <CardHeader>
        <Header label={headerLabel} message={headerMessage} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
