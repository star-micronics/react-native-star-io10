package com.stario10module

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap


class InstanceManager {
    companion object {
        private var instanceMap: ConcurrentHashMap<String, Any> = ConcurrentHashMap()

        fun set(instance: Any): String {
            synchronized(this) {
                var identifier: String

                while (true) {
                    identifier = UUID.randomUUID().toString()

                    if (this.instanceMap.putIfAbsent(identifier, instance) == null) {
                        break
                    }

                    Thread.sleep(10)
                }

                return identifier
            }
        }

        fun setNullable(instance: Any?): String? {
            synchronized(this) {
                if (instance == null) {
                    return null
                }

                var identifier: String?

                while (true) {
                    identifier = UUID.randomUUID().toString()

                    if (this.instanceMap.putIfAbsent(identifier, instance) == null) {
                        break
                    }

                    Thread.sleep(10)
                }

                return identifier
            }
        }


        fun get(identifier: String): Any? {
            synchronized(this) {
                return this.instanceMap[identifier]
            }
        }

        fun remove(identifier: String) {
            synchronized(this) {
                this.instanceMap.remove(identifier)
            }
        }
    }

}