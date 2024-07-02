type ActionHandler = <T extends (...args: any[]) => any>(
  cb: T,
) => (
  ...args: Parameters<T>
) => Promise<
  | { success: true; data: Awaited<ReturnType<T>> }
  | { success: false; message: string }
>;
export const actionHandler: ActionHandler =
  (cb) =>
  async (...args) => {
    try {
      return { success: true, data: await cb(...args) };
    } catch (error: unknown) {
      console.log(error);
      return {
        success: false,
        message: "An error occurred",
      };
    }
  };
