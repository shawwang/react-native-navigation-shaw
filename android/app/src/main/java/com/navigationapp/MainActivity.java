package com.navigationapp;

import android.graphics.Color;
import android.view.Gravity;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    public View createSplashLayout() {
        LinearLayout linearLayout = new LinearLayout(this);
        linearLayout.setGravity(Gravity.CENTER);
        TextView tv = new TextView(this);
        tv.setGravity(Gravity.CENTER);
        tv.setText("I'm splash");
        tv.setTextSize(20);
        tv.setTextColor(Color.RED);
        linearLayout.addView(tv);
        return linearLayout;
    }
}
