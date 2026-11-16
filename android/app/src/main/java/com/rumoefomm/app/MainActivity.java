package com.rumoefomm.app;

import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    // O Voltar fica com o BridgeActivity. Sem onBackPressed próprio,
    // o plugin App entrega o toque e o gesto ao JavaScript.
    private static final int NAVY = Color.parseColor("#0A192F");

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        var window = getWindow();
        window.setStatusBarColor(NAVY);
        window.setNavigationBarColor(NAVY);
        window.setBackgroundDrawable(new ColorDrawable(NAVY));
        // O SDK 36 ignora o opt-out do tema. O app desenha de ponta a ponta
        // e o listener abaixo é quem empurra o WebView para fora das barras.
        WindowCompat.setDecorFitsSystemWindows(window, false);

        View content = findViewById(android.R.id.content);
        content.setBackgroundColor(NAVY);
        WindowInsetsControllerCompat controller = WindowCompat.getInsetsController(window, content);
        controller.setAppearanceLightStatusBars(false);
        controller.setAppearanceLightNavigationBars(false);

        ViewCompat.setOnApplyWindowInsetsListener(content, (v, windowInsets) -> {
            Insets systemBars = windowInsets.getInsets(
                WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout()
            );
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return WindowInsetsCompat.CONSUMED;
        });
        ViewCompat.requestApplyInsets(content);
    }

    @Override
    public void onStart() {
        super.onStart();
        View content = findViewById(android.R.id.content);
        if (content != null) ViewCompat.requestApplyInsets(content);
    }
}
