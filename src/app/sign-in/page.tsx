"use client";

import { useForm, useFormState } from "react-hook-form";
import { toast } from "sonner";

import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IForm {
	email: string;
}

const SignIn: FC = () => {
	const { handleSubmit, register, control } = useForm<IForm>({
		mode: "onChange",
		defaultValues: {
			email: "",
		},
	});

	const { isValid, isSubmitting } = useFormState({ control });

	const onSubmit = (values: IForm) => {
		if (isValid) {
			toast.success("E-mail enviado com sucesso.");
			console.log(values);
		}
	};

	return (
		<div className="flex h-dvh w-full flex-col items-center justify-center md:flex-row">
			<aside className="hidden h-full w-1/2 bg-primary md:block"></aside>
			<main className="flex h-full w-full items-center justify-center overflow-y-auto md:w-1/2">
				<section className="container-padding flex w-full items-center justify-center">
					<Card className="container-padding w-full max-w-xs flex-shrink-0">
						<CardHeader className="flex flex-col items-center justify-center">
							<Logo />
							<span aria-label="Logo">Entre na sua conta</span>
						</CardHeader>
						<form onSubmit={handleSubmit(onSubmit)}>
							<CardContent>
								<Label htmlFor="email">E-mail</Label>
								<Input
									id="email"
									type="email"
									placeholder="Digite seu e-mail"
									{...register("email", {
										required: true,
										pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
									})}
								/>
							</CardContent>
							<CardFooter>
								<Button
									className="w-full"
									type="submit"
									disabled={isSubmitting || !isValid}
								>
									Entrar
								</Button>
							</CardFooter>
						</form>
					</Card>
				</section>
			</main>
		</div>
	);
};

export default SignIn;
