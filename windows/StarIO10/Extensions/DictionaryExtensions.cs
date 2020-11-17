using System;
using System.Collections.Generic;
using System.Linq;

namespace StarMicronics.ReactNative.StarIO10
{
    internal static class DictionaryExtensions
    {
        public static bool TryGetKey<TKey, TValue>(this IEnumerable<KeyValuePair<TKey, TValue>> dictionary, TValue value, out TKey output)
        {
            bool result = false;
            output = default;

            try
            {
                output = dictionary.First(x => x.Value.Equals(value)).Key;
                result = true;
            }
            catch (Exception) { }

            return result;
        }
    }
}
