import { useCanGoBack, useRouter } from "@tanstack/react-router";
import { Undo2 } from "lucide-react";
import React from "react";
import { Button } from "../atoms/Button";

type GoBackButtonProps = {
  className?: string;
};

export const GoBackButton: React.FC<GoBackButtonProps> = ({ className }) => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  const goBack = () => (canGoBack ? router.history.back() : router.history.push("/"));
  return (
    <Button variant="link" onClick={goBack} className={className}>
      <Undo2 />
      Go back
    </Button>
  );
};
