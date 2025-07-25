import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { FC } from "react";

export const LaunchParamsPage: FC = () => {
  const lp = retrieveLaunchParams();

  return (
    <div>
      <h2>Launch Params</h2>
      <p>
        <strong>Platform:</strong> {lp.tgWebAppPlatform}
      </p>
      <p>
        <strong>Show Settings:</strong> {String(lp.tgWebAppShowSettings)}
      </p>
      <p>
        <strong>Version:</strong> {lp.tgWebAppVersion}
      </p>
      <p>
        <strong>Inline:</strong> {String(lp.tgWebAppBotInline)}
      </p>
      <p>
        <strong>Start Param:</strong> {lp.tgWebAppStartParam}
      </p>
    </div>
  );
};
