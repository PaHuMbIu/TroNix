import { FC } from "react";
import {
  initDataRaw as _initDataRaw,
  initDataState as _initDataState,
  useSignal,
} from "@telegram-apps/sdk-react";

// TODO FC - Разве это вау? Почему бы просто компонент по ванильному не написать?
export const InitDataPage: FC = () => {
  const initDataRaw = useSignal(_initDataRaw);
  const initDataState = useSignal(_initDataState);

  if (!initDataRaw || !initDataState) {
    return (
      <div>
        <h2 className="text-[300px]">Missing Init Data</h2>
        <p>The application was launched without initData.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Init Data</h2>
      <p>
        <strong>Raw:</strong> {initDataRaw}
      </p>

      {initDataState.user && (
        <>
          <h3>User</h3>
          <p>
            <strong>ID:</strong> {initDataState.user.id}
          </p>
          <p>
            <strong>Username:</strong> {initDataState.user.username}
          </p>
        </>
      )}

      {initDataState.query_id && (
        <p>
          <strong>Query ID:</strong> {initDataState.query_id}
        </p>
      )}
    </div>
  );
};
