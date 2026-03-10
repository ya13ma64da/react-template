// Shadcn UI
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { env } from "@/lib/env"
import { Link, useNavigate } from "@/router"
import { AppleIcon, GoogleIcon, MineIcon } from "@/components/mine/icons"
import { signinWithGoogle } from "@/lib"
import { useTranslation } from "react-i18next"
import { FadeinAnimation } from "@/components/mine/animation"

export function LoginTemplate({ type }: { type: "signin" | "signup" }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const reverseType = type === "signin" ? "signup" : "signin"

  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-4 overflow-hidden">
      <FadeinAnimation className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center px-6">
                <Link to="/introduce">
                  <MineIcon className="size-8" />
                </Link>

                <p className="text-xl font-bold">{t(`pages.${type}.title`, { title: env.title })}</p>

                <FieldDescription>
                  {t(`pages.${type}.announce`)} <Link to={`/${reverseType}`}>{t(`title.${reverseType}`)}</Link>
                </FieldDescription>
              </div>

              <Field>
                <FieldLabel htmlFor="email">{t("components.sign.email")}</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">{t("components.sign.pass")}</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </Field>

              <Field>
                <Button type="submit">{t(`pages.${type}.submit`)}</Button>
              </Field>

              <FieldSeparator>{t("components.sign.or")}</FieldSeparator>

              <Field className="grid gap-2 sm:grid-cols-2">
                <Button variant="outline" type="button">
                  <AppleIcon className="size-4" />
                  {t(`pages.${type}.continue.apple`)}
                </Button>

                <Button variant="outline" type="button" onClick={async () => {
                  await signinWithGoogle()
                  navigate("/")
                }}>
                  <GoogleIcon className="size-4" />
                  {t(`pages.${type}.continue.google`)}
                </Button>
              </Field>
            </FieldGroup>
          </form>

          <FieldDescription className="px-6 text-center">
            {t(`pages.${type}.warn`)} <Link to="/terms">{t("title.terms")}</Link> & <Link to="/privacy">{t("title.privacy")}</Link>
          </FieldDescription>
        </div>
      </FadeinAnimation>
    </div>
  )
}
