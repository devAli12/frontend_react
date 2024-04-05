import AppLayout from './ui/AppLayout';
import Books from './pages/books';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter,Routes ,Route , Navigate} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      // staleTime: 0,
    },
  },
});

function App() {

  return  (
    <QueryClientProvider client={queryClient}>
     <ReactQueryDevtools initialIsOpen={false} />
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/books" />} />
          <Route path="/books" element={<Books />} />
        </Route>

        {/* <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
    <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
  </QueryClientProvider>
  );
}
export default App
