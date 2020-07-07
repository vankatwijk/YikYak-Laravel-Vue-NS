<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unsigned()->index();
            $table->integer('channel_id');
            $table->string('title');
            $table->text('description');
            $table->float('lat', 10, 6);
            $table->float('lng', 10, 6);
            $table->float('cos_radians_lat', 10, 6);
            $table->float('radians_lng', 10, 6);
            $table->float('sin_radians_lat', 10, 6);
            $table->timestamps();
            $table->softDeletes();

            // $table->foreign('channel_id')
            // ->references('id')
            // ->on('channels')
            // ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notes');
    }
}
