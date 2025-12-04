import {Logo} from "@/app/(landing)/_components/Logo";
import {Button} from "@/components/ui/button";

export const Footer = () => {
    return (
        // <div className="w-full border-t mt-10">
        //     <div className="max-w-7xl mx-auto py-6 px-4 text-center text-sm text-gray-500">
        //         © 2025 Yestion. All rights reserved.
        //     </div>
        // </div>
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <Logo />
            <div className="md:ml-auto w-full flex justify-between md:justify-end items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">Privacy Policy</Button>
                <Button variant="ghost" size="sm">Terms & Conditions</Button>
            </div>
        </div>
    );
}