package com.example.appsecond;

import android.os.Bundle;
import android.provider.ContactsContract;
import android.provider.ContactsContract.CommonDataKinds.StructuredName;
import android.provider.ContactsContract.Data;
import android.provider.ContactsContract.RawContacts;
import android.app.Activity;
import android.content.ContentUris;
import android.content.ContentValues;
import android.database.Cursor;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends Activity
						  implements OnClickListener {
	
	private int i=0;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		Button b =(Button) findViewById(R.id.button1);
		Button c = (Button) findViewById(R.id.button2);
		b.setOnClickListener(this);
		c.setOnClickListener(new OnClickListener() {
			public void onClick(View arg0) {
				addContact("Roberto Omana");
			}

			private void addContact(String newName) {
				ContentValues myContact = new ContentValues();
				myContact.put(RawContacts.ACCOUNT_NAME, newName);
				myContact.put(RawContacts.ACCOUNT_TYPE, newName);
				//Uri addUri = getContentResolver().insert(RawContacts.CONTENT_URI, myContact);
				long rawContactId =1234567;
				myContact.clear();
				myContact.put(Data.RAW_CONTACT_ID, rawContactId);
				myContact.put(Data.MIMETYPE, StructuredName.CONTENT_ITEM_TYPE);
				myContact.put(StructuredName.DISPLAY_NAME,newName);
				getContentResolver().insert(Data.CONTENT_URI, myContact);
			
				TextView text = (TextView) findViewById(R.id.textView1);
				text.setText("Nuevo Contacto: "+newName);
			}
		});
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	@Override
	public void onClick(View arg0) {
		TextView text = (TextView) findViewById(R.id.textView1);
		String s = queryContact();
		text.setText(s);
		
	}

	private String queryContact() {
		String mensaje;
		Cursor nameCursor = 
				getContentResolver().query(ContactsContract.Contacts.CONTENT_URI,null,null,null,null);
		if (nameCursor.moveToNext()) {
			mensaje = nameCursor.getString(nameCursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME_PRIMARY));
			
		} else {
			mensaje = "No hay contactos";
		}
		nameCursor.close();
		return mensaje;
	}

}
