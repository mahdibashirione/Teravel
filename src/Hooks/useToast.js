import toast from "react-hot-toast";

const useToast = () => {
  const toastError = (m) => toast.error(m);
  const toastSuccess = (m) => toast.success(m);

  return { toastError, toastSuccess };
};

export default useToast;
