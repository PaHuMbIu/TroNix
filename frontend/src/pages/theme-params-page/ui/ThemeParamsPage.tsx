import { themeParams, useSignal } from "@telegram-apps/sdk-react";
import type { FC } from "react";

export const ThemeParamsPage: FC = () => {
  const tp = useSignal(themeParams.state);

  return (
    <div>
      <h2>Theme Params</h2>
      <ul>
        {Object.entries(tp).map(([key, value]) => (
          <li key={key}>
            <strong>
              {key.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`).replace(/background/, "bg")}:
            </strong>{" "}
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
