import { LogIn } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";

export const NavBar: FC = () => {
	return (
		<nav className="align-items opacity-6 fixed left-0 right-0 top-0 z-40 flex w-full w-full justify-between bg-background p-2.5 shadow-lg">
			<div className="[&>a>svg]:h-8 [&>a>svg]:w-8">
				<Link href="/" aria-label="Home" className="flex p-0.5">
					<Logo />
				</Link>
			</div>
			<div>
				<ul>
					<li>
						<Button asChild variant="link">
							<Link
								href="/login"
								className="align-items flex justify-center gap-0.5"
							>
								<LogIn />
								<span>Entrar</span>
							</Link>
						</Button>
					</li>
				</ul>
			</div>
		</nav>
	);
};
