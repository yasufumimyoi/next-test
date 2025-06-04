"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
});

export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "入力内容に誤りがあります。",
    };
  }

  // ここでデータベースへの保存などの処理を行うことができます
  console.log("送信されたデータ:", validatedFields.data);

  return {
    message: "送信が完了しました！",
  };
}
