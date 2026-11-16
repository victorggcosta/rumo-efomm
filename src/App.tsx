import { AppStateProvider } from "./state.tsx";
import { Shell } from "./components/Shell.tsx";

export default function App() {
  return (
    <AppStateProvider>
      <Shell />
    </AppStateProvider>
  );
}
