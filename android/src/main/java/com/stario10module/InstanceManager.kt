package com.stario10module

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap


class InstanceManager {
    companion object {
        private var instanceMap: ConcurrentHashMap<String, Any> = ConcurrentHashMap()

        fun set(instance: Any): String {
            var identifier: String
            
            while (true) {
                identifier = UUID.randomUUID().toString()

                if(this.instanceMap.putIfAbsent(identifier, instance) == null) {
                    break
                }

                Thread.sleep(10)
            }

            return identifier
        }

        fun get(identifier: String): Any? {
            return this.instanceMap[identifier]
        }

        fun remove(identifier: String) {
            this.instanceMap.remove(identifier)
        }
    }

}