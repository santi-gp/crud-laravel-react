<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie; /* Add Movie Model */ 

class MovieController extends Controller
{
    public function index()
    {
        try {
            $data = Movie::all();
            $response['data'] = $data;
            $response['success'] = true;
          } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
          }
          return $response;
    }

    public function store(Request $request)
    {
        try {
            $insert['title'] = $request['title'];
            $insert['genre'] = $request['genre'];
            $insert['any'] = $request['any'];
            $insert['score'] = $request['score'];
                
            Movie::insert($insert);
    
            $response['message'] = "Se ha añadido nueva Película";
            $response['success'] = true;
          } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = true;
          }
         return $response;
    }
    
    public function edit($id)
    {
        try {
          $data = Movie::find($id);
          if ($data) {
            $response['data'] = $data;
            $response['message'] = "Película actualizada correctamente";
            $response['success'] = true;
          }
          else {
            $response['message'] = "No se ha encontrado película con el id => $id";
            $response['success'] = false;
          }
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
    }

    public function update(Request $request, $id)
    {
        try {
          $data['title'] = $request['title'];
          $data['genre'] = $request['genre'];
          $data['any'] = $request['any'];
          $data['score'] = $request['score'];
            
          Movie::where("id",$id)->update($data);
  
          $response['message'] = "Película actualizada correctamente";
          $response['success'] = true;
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
    }
   
    public function destroy($id)
    {
        try {
          $res = Movie::where("id",$id)->delete();
          $response['res'] = $res;
          $response['message'] = "Película borrada correctamente";
          $response['success'] = true; 
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
    }
}
