"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function NewsForm({ initialData = null, onSubmit, isEditing = false }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    category: initialData?.category || "Kesehatan",
    status: initialData?.status || "draft",
    date:
      initialData?.date ||
      new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: initialData?.id,
      ...formData,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Judul Berita</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="Masukkan judul berita"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Ringkasan</Label>
          <Textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => handleChange("excerpt", e.target.value)}
            placeholder="Masukkan ringkasan berita"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Konten Berita</Label>
          <Textarea
            id="content"
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            placeholder="Masukkan konten berita lengkap"
            className="min-h-[200px]"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Kategori</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleChange("category", value)}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Kesehatan">Kesehatan</SelectItem>
                <SelectItem value="Infrastruktur">Infrastruktur</SelectItem>
                <SelectItem value="Budaya">Budaya</SelectItem>
                <SelectItem value="Pendidikan">Pendidikan</SelectItem>
                <SelectItem value="Pemerintahan">Pemerintahan</SelectItem>
                <SelectItem value="Pertanian">Pertanian</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Status</Label>
            <RadioGroup
              value={formData.status}
              onValueChange={(value) => handleChange("status", value)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="draft" id="draft" />
                <Label htmlFor="draft" className="cursor-pointer">
                  Draft
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="published" id="published" />
                <Label htmlFor="published" className="cursor-pointer">
                  Publikasikan
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Gambar Berita</Label>
          <Input id="image" type="file" />
          <p className="text-sm text-muted-foreground">
            Format yang didukung: JPG, PNG. Ukuran maksimal: 2MB.
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => onSubmit(null)}>
          Batal
        </Button>
        <Button type="submit">{isEditing ? "Perbarui" : "Simpan"}</Button>
      </div>
    </form>
  );
}
