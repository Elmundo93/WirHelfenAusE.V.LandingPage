'use client'

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function BackButton() {

const router = useRouter();
  
const handleBackClick = () => {
  router.push('/');
};


return (

<Button
onPress={handleBackClick}
className="mb-12 bg-amber-500 text-white text-lg rounded-full"
>
Zurück zur Startseite
    </Button>
    );
}