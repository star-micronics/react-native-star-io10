using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;

namespace StarMicronics.ReactNative.StarIO10
{
    class StarIO10ObjectWrapper<T>
    {
        private static readonly ConcurrentDictionary<string, T> ObjectDictionary = new ConcurrentDictionary<string, T>();

        public static void SetObject(T obj, out string objectIdentifier)
        {
            string _objectIdentifier;

            while (true)
            {
                _objectIdentifier = Guid.NewGuid().ToString();

                if (!ObjectDictionary.ContainsKey(_objectIdentifier) &&
                    ObjectDictionary.TryAdd(_objectIdentifier, obj))
                {
                    break;
                }

                Thread.Sleep(10);
            }

            objectIdentifier = _objectIdentifier;
        }

        public static bool GetObject(string objectIdentifier, out T obj)
        {
            obj = default;

            bool result = ObjectDictionary.ContainsKey(objectIdentifier);

            if (result)
            {
                obj = ObjectDictionary[objectIdentifier];
            }

            return result;
        }

        public static void DisposeObject(string objectIdentifier)
        {
            ObjectDictionary.Remove(objectIdentifier, out _);
        }
    }
}
