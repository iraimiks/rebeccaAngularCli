import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import '../../../../assets/js/form-submission-handler.js';
import { DOCUMENT } from '@angular/common';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
   constructor() {

  }
  title = 'Paldies ar Jums sazināsies!';
  toggleTitle() {
    $('#gForm').bind('submit', function (e) {
      $('#send').prop('disabled', true);
      const valid = true;
      if (!valid) {
        // Prevent form from submitting if validation failed
        e.preventDefault();

        // Reactivate the button if the form was not submitted
        $('#send').prop('disabled', false);


    }
      $.ajax({
          url: this.action,
          type: this.method,
          data: $(this).serialize(),
          success: function() {
              // AJAX request finished, handle the results and hide progress
              $('#gForm').hide();
              $('.title').show();
          }
      });
      return false;
  }); //
  }
  ngOnInit() {

  }
}
