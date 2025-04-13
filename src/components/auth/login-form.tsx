import { CardWrapper } from "./card-wrapper";

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      headerMessage="Join us to share your world."
      backButtonLabel="Don't have an account"
      backButtonHref="#"
      showSocial
    ></CardWrapper>
  );
}
