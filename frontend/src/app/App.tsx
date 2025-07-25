import { useMemo } from "react";
import { retrieveLaunchParams, useSignal, isMiniAppDark } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { AppRouter } from "@/app/router/AppRouter.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import debug from "debug";

interface LaunchParams {
  tgWebAppPlatform?: string;
}

export function App() {
  const lp = useMemo<LaunchParams>(() => {
    try {
      return retrieveLaunchParams();
    } catch {
      return {};
    }
  }, []);

  const isDark = useSignal(isMiniAppDark);

  debug.enable("ton-connect*");

  const platform =
    lp.tgWebAppPlatform && ["macos", "ios"].includes(lp.tgWebAppPlatform) ? "ios" : "base";

  if (!lp.tgWebAppPlatform) {
    return <div className="text-3xl">Пожалуйста, откройте приложение внутри Telegram.</div>;
  }

  return (
    <TonConnectUIProvider manifestUrl="https://<твой-домен>/tonconnect-manifest.json">
      <AppRoot appearance={isDark ? "dark" : "light"} platform={platform}>
        <AppRouter />
      </AppRoot>
    </TonConnectUIProvider>
  );
}
