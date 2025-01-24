import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background items-center mx-auto">
            <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 py-12 md:h-32 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <Link
                            href="https://x.com/hatif_15"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            hatif
                        </Link>
                        . The source code is available on{" "}
                        <Link
                            href="https://github.com/hatif03/augur_frontend"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </footer>
    )
}