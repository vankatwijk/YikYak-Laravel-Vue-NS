/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.mapbox.mapboxsdk.maps;

public class OnMapReadyCallback extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider, com.mapbox.mapboxsdk.maps.OnMapReadyCallback {
  public OnMapReadyCallback() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onMapReady(com.mapbox.mapboxsdk.maps.MapboxMap param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onMapReady", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
