using StarMicronics.StarIO10;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;

namespace StarMicronics.ReactNative.StarIO10
{
    class StarIO10SharedObjectManager
    {
        private static readonly StarIO10SharedObjectManager _instance = new StarIO10SharedObjectManager();
        private StarIO10SharedObjectManager() { }
        public static StarIO10SharedObjectManager Instance => _instance;

        private readonly ConcurrentDictionary<string, object> ObjectDictionary = new ConcurrentDictionary<string, object>();

        private static object Lock { get; } = new object();

        public void SetObject(object obj, out string objectIdentifier)
        {
            lock (Lock)
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
        }

        public bool GetObject(string objectIdentifier, out object obj)
        {
            lock (Lock)
            {
                obj = default;

                bool result = ObjectDictionary.ContainsKey(objectIdentifier);

                if (result)
                {
                    obj = ObjectDictionary[objectIdentifier];
                }

                return result;
            }
        }

        public bool GetObject(string objectIdentifier, out StarPrinter obj)
        {
            lock (Lock)
            {
                obj = default;

                bool result = ObjectDictionary.ContainsKey(objectIdentifier);

                if (result)
                {
                    obj = (StarPrinter)ObjectDictionary[objectIdentifier];
                }

                return result;
            }
        }

        public bool GetObject(string objectIdentifier, out StarPrinterSettingFirmware obj)
        {
            lock (Lock)
            {
                obj = default;

                bool result = ObjectDictionary.ContainsKey(objectIdentifier);

                if (result)
                {
                    obj = (StarPrinterSettingFirmware)ObjectDictionary[objectIdentifier];
                }

                return result;
            }
        }

        public void DisposeObject(string objectIdentifier)
        {
            lock (Lock)
            {
                ObjectDictionary.Remove(objectIdentifier, out _);
            }
        }
    }
}
