/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_22495_26_TouchListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider, android.view.View.OnTouchListener {
  public Object_vendor_22495_26_TouchListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public boolean onTouch(android.view.View param_0, android.view.MotionEvent param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    return (boolean) com.tns.Runtime.callJSMethod(this, "onTouch", boolean.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
