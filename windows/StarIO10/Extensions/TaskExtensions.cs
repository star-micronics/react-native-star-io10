using System.Threading.Tasks;

namespace StarMicronics.ReactNative.StarIO10
{
    internal static class TaskExtensions
    {
        public static T Sync<T>(this Task<T> task)
        {
            Task<T> wrapTask = Task.Run(async () =>
            {
                return await task.ConfigureAwait(false);
            });

            return wrapTask.Result;
        }

        public static void Sync(this Task task)
        {
            Task wrapTask = Task.Run(async () =>
            {
                await task.ConfigureAwait(false);
            });

            wrapTask.Wait();
        }
    }
}
