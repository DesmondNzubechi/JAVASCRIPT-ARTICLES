// Define a logging mixin
const loggingMixin = {
    log(message) {
      console.log(`Log: ${message}`);
    }
  };
  
  // Define a timestamping mixin
  const timestampingMixin = {
    timestamp() {
      console.log(`Timestamp: ${new Date()}`);
    }
  };
  
  // Combine logging and timestamping mixins
  const enhancedObject = {};
  Object.assign(enhancedObject, loggingMixin, timestampingMixin);
  
  // Now, enhancedObject has both log and timestamp methods
  enhancedObject.log("Mixin magic!");
  enhancedObject.timestamp();
  
  // Avoiding name collisions
  const loggingMixinWithPrefix = {
    _log(message) {
      console.log(`Log: ${message}`);
    },
    logPublicly(message) {
      this._log(message);
    }
  };
  
  const timestampingMixinWithPrefix = {
    _timestamp() {
      console.log(`Timestamp: ${new Date()}`);
    },
    timestampPublicly() {
      this._timestamp();
    }
  };
  
  const finalObject = {};
  Object.assign(finalObject, loggingMixinWithPrefix, timestampingMixinWithPrefix);
  
  // Now, finalObject has logPublicly and timestampPublicly methods
  finalObject.logPublicly("Avoiding collisions!");
  finalObject.timestampPublicly();
  
  // Using Mixins in ES6 Classes
  class LoggingMixin {
    log(message) {
      console.log(`Log: ${message}`);
    }
  }
  
  class TimestampingMixin {
    timestamp() {
      console.log(`Timestamp: ${new Date()}`);
    }
  }
  
  class EnhancedClass extends LoggingMixin {
    constructor() {
      super();
      Object.assign(this, new TimestampingMixin());
    }
  }
  
  // Create an instance of EnhancedClass
  const enhancedInstance = new EnhancedClass();
  enhancedInstance.log("ES6 mixins");
  enhancedInstance.timestamp();
  