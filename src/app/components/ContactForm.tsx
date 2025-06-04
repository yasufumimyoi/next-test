"use client";

import { useActionState } from "react";
import { submitForm, type FormState } from "../actions";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [state, formAction] = useActionState(submitForm, {
    message: null,
  });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    try {
      startTransition(() => {
        formAction(formData);
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          お名前
        </label>
        <input
          type="text"
          id="name"
          name="name"
          disabled={isPending}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 disabled:opacity-50"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          disabled={isPending}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 disabled:opacity-50"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 disabled:opacity-50"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            送信中...
          </>
        ) : (
          "送信"
        )}
      </Button>

      {state.message && (
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          {state.message}
        </p>
      )}
    </form>
  );
}
